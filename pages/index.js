import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { getMainInfo } from "services";
import { getFaqInfo } from "services";

export default function Home({ mainInfo, faqInfo }) {
    console.log("faqInfo", faqInfo);
    return (
        <Layout className="">
            <SEO
                title="Casa Mudra Boutique Hotel"
                description="Discover Casa Mudra Boutique Hotel in Guadalajara"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner mainInfo={mainInfo} />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="amenities" className="features">
                            {/* <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup> */}
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                {mainInfo[0].sectionTwoTitle}
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>{mainInfo[0].sectionTwoDescription}</p>
                            </Content>
                            <ContentImage sectionTwoInfo={mainInfo[0]} />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            {/* <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup> */}
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                {mainInfo[0].sectionThreeTitle}
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>{mainInfo[0].sectionThreeDescription}</p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src={
                                                mainInfo[0]
                                                    .sectionThreeCardOneImage
                                                    .url
                                            }
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            {
                                                mainInfo[0]
                                                    .sectionThreeCardOneTitle
                                            }
                                        </CardHeader>
                                        <p>
                                            {
                                                mainInfo[0]
                                                    .sectionThreeCardOneDescription
                                            }
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src={
                                                mainInfo[0]
                                                    .sectionThreeCardTwoImage
                                                    .url
                                            }
                                            alt="Image Two Alt"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Progress Tracking
                                        </CardHeader>
                                        <p>
                                            Celebrate your wins and stay
                                            motivated on your nutrition journey.
                                            NutriTrack allows you to monitor
                                            your progress with weight,
                                            measurements, and other key metrics.
                                            Track your improvements over time
                                            and see the positive impact of your
                                            healthy choices.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="reviews" className="benefits">
                            {/* <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup> */}
                            <PageTitle className="" type="default">
                                See what our guests have to say
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Frequently Asked Questions About Casa Mudra
                            </PageTitle>
                            <Accordion faqInfo={faqInfo} />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                </SectionContainer>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const mainInfo = (await getMainInfo()) || [];
    const faqInfo = (await getFaqInfo()) || [];
    return {
        props: { mainInfo, faqInfo }
    };
}
// export async function getStaticProps() {
//     return {
//         props: { faqInfo }
//     };
// }
