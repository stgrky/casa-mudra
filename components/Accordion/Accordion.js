import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import { getFaqInfo } from "services";

// const accordionData = [
//     {
//         id: uuid(),
//         title: faqInfo[0].faq1Title,
//         isOpen: true,
//         content: faqInfo[0].faq1Answer
//     },
//     {
//         id: uuid(),
//         title: faqInfo[0].faq2Title,
//         isOpen: false,
//         content: faqInfo[0].faq2Answer
//     },
//     {
//         id: uuid(),
//         title: faqInfo[0].faq3Title,
//         isOpen: false,
//         content: faqInfo[0].faq3Answer
//     },
//     {
//         id: uuid(),
//         title: faqInfo[0].faq4Title,
//         isOpen: false
//     }
// ];

export const Accordion = ({ faqInfo }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionItemType = {
        top: "rounded-t-lg",
        default: "border rounded-none border-t-0",
        bottom: "border border-t-0 rounded-b-lg"
    };

    const accordionData = [
        {
            id: uuid(),
            title: faqInfo[0].faq1Title,
            isOpen: true,
            content: faqInfo[0].faq1Answer
        },
        {
            id: uuid(),
            title: faqInfo[0].faq2Title,
            isOpen: false,
            content: faqInfo[0].faq2Answer
        },
        {
            id: uuid(),
            title: faqInfo[0].faq3Title,
            isOpen: false,
            content: faqInfo[0].faq3Answer
        },
        {
            id: uuid(),
            title: faqInfo[0].faq4Title,
            isOpen: false
        }
    ];

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};

export async function getStaticProps() {
    const faqInfo = (await getFaqInfo()) || [];
    return {
        props: { faqInfo }
    };
}
