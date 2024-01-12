import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getMainInfo = async () => {
    const query = gql`
        query MainInfo {
            homepages {
                mainText
                mainTextDescription
                mainImage {
                    url
                }
                sectionTwoTitle
                sectionTwoDescription
                sectionTwoImageOne {
                    url
                }
                sectionTwoImageOneTitle
                sectionTwoImageOneDescription
                sectionTwoImageTwo {
                    url
                }
                sectionTwoImageTwoTitle
                sectionTwoImageTwoDescription
                sectionThreeTitle
                sectionThreeDescription
                sectionThreeCardOneImage {
                    url
                }
                sectionThreeCardOneTitle
                sectionThreeCardOneDescription

                sectionThreeCardTwoTitle
                sectionThreeCardTwoDescription
                sectionThreeCardTwoImage {
                    url
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);

    return result.homepages;
};

export const getFaqInfo = async () => {
    const query = gql`
        query FaqInfo {
            frequentlyAskedQuestions {
                faq1Answer
                faq1Title
                faq2Answer
                faq2Title
                faq3Answer
                faq3Title
                faq4Answer
                faq4Title
            }
        }
    `;
    const result = await request(graphqlAPI, query);

    return result.frequentlyAskedQuestions;
};
