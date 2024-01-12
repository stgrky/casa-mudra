import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getMainInfo = async () => {
    const query = gql`
        query MainInfo {
            homepagesConnection {
                edges {
                    node {
                        mainText
                        mainTextDescription
                        mainPhoto {
                            url
                        }
                    }
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);

    console.log("result", result);
    return result.homepagesConnection;
};
