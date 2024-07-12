import { fetchAPI } from "../../lib/base";

export async function getPosts() {
  const data = await fetchAPI(
    // `query FetchPosts {
    //     posts {
    //       nodes {
    //         excerpt
    //         featuredImage {
    //           node {
    //             sourceUrl
    //           }
    //         }
    //         slug
    //         title
    //       }
    //     }
    //   }`,
    // {
      // variables: {
        // first,
      // },
    // }
    `query FetchPosts {
      category(id: "dGVybToz") {
        posts {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }
    }`,
  );

  return data?.category?.posts?.nodes;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post;
}