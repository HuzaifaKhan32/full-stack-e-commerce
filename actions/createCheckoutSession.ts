"use server"

import stripe from "@/lib/stripe"
import { Address } from "../sanity.types"
import Stripe from "stripe"
import { urlFor } from "@/sanity/lib/image"

export interface Metadata {
    orderNumber: string,
    customerName: string,
    customerEmail: string,
    clerkUserId: string | undefined,
    address?: Address | null
}


export async function createCheckoutSession (items : any, metadata: Metadata) {
    try {
        const customers = await stripe.customers.list({
            email: metadata?.customerEmail,
            limit: 1
        })
        const customerId = customers?.data?.length > 0 ? customers?.data[0]?.id : ""
        const sessionPayLoad: Stripe.Checkout.SessionCreateParams = {
            metadata : {
                orderNumber: metadata?.orderNumber,
                customerName: metadata?.customerName,
                customerEmail: metadata?.customerEmail,
                clerkUserId: metadata.clerkUserId ?? null,
                address: JSON.stringify(metadata?.address)
            },
            mode: "payment",
            allow_promotion_codes: true,
            payment_method_types: ["card"],
            invoice_creation: {
                enabled: true
            },
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSON_IS}&orderNumber=${metadata?.orderNumber}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
            line_items: items?.map((item: any) => ({
                price_data: {
                    currency: "USD",
                    unit_amount: Math.round(item?.product?.price! * 100),
                    product_data: {
                        name: item?.product?.name || "Unknown Product",
                        description: item?.product?.description,
                        metadata: {id: item?.product?._id},
                        images:
                            item?.product?.images && item?.product?.images?.length > 0 ? [urlFor(item?.product?.images[0]).url()] : undefined
                    },
                },
                quantity: item?.quantity
            }))
        }
        if(customerId){
            sessionPayLoad.customer = customerId
        }else{
            sessionPayLoad.customer_email = metadata.customerEmail
        }
        const session = await stripe.checkout.sessions.create(sessionPayLoad)
        return session.url
    } catch (error) {
        console.error("Error Creating checkout session", error)
        throw error       
    }
}