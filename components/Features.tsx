import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Competitive rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Instant lockins',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: DevicePhoneMobileIcon,
    },
]

export default function Features() {
    return (
        <>
            <div className="sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="sm:text-center">
                        <h2 className="text-lg font-semibold leading-8 text-brand">Lease Transfers</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-secondary dark:text-primary sm:text-4xl">A great way to save money</p>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-trinary">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>

                    <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-lg font-semibold leading-8 text-secondary dark:text-primary">{feature.name}</p>
                                        <p className="mt-2 text-base leading-7 text-trinary">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

