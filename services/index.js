import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getMainInfo = async () => {
    const query = gql`
        query MainInfo {
            homepages {
                mainText
                mainTextDescription
                mainPhoto {
                    url
                }
                sectionTwoTitle
                sectionTwoDescription
                sectionTwoPhotoOneDescription
                sectionTwoPhotoOneTitle
                sectionTwoPhotoOne {
                    url
                }
                sectionTwoPhotoTwoDescription
                sectionTwoPhotoTwoTitle
                sectionTwoPhotoTwo {
                    url
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);

    return result.homepages;
};
