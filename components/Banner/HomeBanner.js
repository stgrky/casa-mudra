import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = ({ mainInfo }) => {
    console.log("mainInfo", mainInfo[0].mainPhoto.url);
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                {/* <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <BadgeGroup alignment="center">
                        <BadgeMessage>Discover NutriTrack!</BadgeMessage>
                        <BadgeIcon icon="game-icons:meal" />
                    </BadgeGroup>
                </MotionBTTContainer> */}
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        {mainInfo[0].mainText}
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>{mainInfo[0].mainTextDescription}</p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button href="#features">Photo Gallery</Button>
                            <a
                                role="button"
                                href="https://www.booking.com/hotel/mx/casa-mudra.html"
                                className="btn btn--secondary"
                            >
                                Book Now
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    {/* <div className="page-banner--image">
                        <Image
                            src={mainInfo[0].mainPhoto.url}
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        />
                    </div> */}

                    <div
                        id="carouselExampleCaptions"
                        class="relative"
                        data-te-carousel-init
                        data-te-ride="carousel"
                    >
                        <div
                            class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                            data-te-carousel-indicators
                        >
                            <button
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide-to="0"
                                data-te-carousel-active
                                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide-to="1"
                                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide-to="2"
                                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                aria-label="Slide 3"
                            ></button>
                        </div>

                        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                            <div
                                class="backface-hidden relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-active
                                data-te-carousel-item
                            >
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                                    class="block w-full"
                                    alt="..."
                                />
                                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                                    <h5 class="text-xl">First slide label</h5>
                                    <p>
                                        Some representative placeholder content
                                        for the first slide.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="backface-hidden relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item
                            >
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                                    class="block w-full"
                                    alt="..."
                                />
                                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                                    <h5 class="text-xl">Second slide label</h5>
                                    <p>
                                        Some representative placeholder content
                                        for the second slide.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="backface-hidden relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item
                            >
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                                    class="block w-full"
                                    alt="..."
                                />
                                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                                    <h5 class="text-xl">Third slide label</h5>
                                    <p>
                                        Some representative placeholder content
                                        for the third slide.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button
                            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide="prev"
                        >
                            <span class="inline-block h-8 w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </span>
                            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                Previous
                            </span>
                        </button>

                        <button
                            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide="next"
                        >
                            <span class="inline-block h-8 w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </span>
                            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                Next
                            </span>
                        </button>
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
