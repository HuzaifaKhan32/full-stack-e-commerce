import React from 'react'
import { Brand } from '../../../sanity.types'
import { Title } from '../ui/text'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

type Props = {
    brands: Brand[],
    selectedBrand?: string | null,
    setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>
}

function BrandList({brands, setSelectedBrand, selectedBrand}: Props) {
    return (
        <div className='w-full bg-white p-5 flex flex-col justify-start gap-2'>
            <Title className='text-base text-black'>Brands</Title>
            <RadioGroup className='mt-2 space-y-1' value={selectedBrand || ""}>
                {brands?.map((brand) => (
                    <div key={brand?._id} className='flex items-center gap-2' onClick={() => setSelectedBrand(brand?.slug?.current as string)}>
                            <RadioGroupItem value={brand?.slug?.current as string}
                            id={brand?.slug?.current}
                            className='rounded'/>
                        <Label className={`${selectedBrand == brand?.slug?.current && "font-semibold text-shop_btn_dark_green"}`}>{brand?.title}</Label>
                    </div>
                ))}
            </RadioGroup>
            {selectedBrand && (
                <button onClick={() => setSelectedBrand(null)} className='mt-2 underline underline-offset-2 text-shop_btn_dark_green/80 hover:text-shop_btn_dark_green hoverEffect text-left cursor-pointer'>
                    Reset Filters
                </button>
            )}
        </div>
      )
}

export default BrandList