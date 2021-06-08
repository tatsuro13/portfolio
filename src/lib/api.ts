interface Post {
  id: string;
  title: string;
  description: string;
  body: HTMLElement;
  thumbnail: string;
}

const worksId: string = process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_ID;
const baseUrl: string = `https://${worksId}.microcms.io/api/v1`;
const apiKey: string = process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY;
const writeApiKey: string = process.env.NEXT_PUBLIC_MICRO_CMS_WRITE_API_KEY;

const params = (method: string, data?: {}) => {
  if (data) {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-WRITE-API-KEY': writeApiKey,
      },
      body: JSON.stringify(data),
    };
  } else {
    return {
      method: method,
      headers: {
        'X-API-KEY': apiKey,
      },
    };
  }
};

export const getAllPosts = async (): Promise<Post[]> => {
  const data = await fetch(`${baseUrl}/works`, params('GET'))
    .then((res) => res.json())
    .catch(() => null);

  if (data.contents) {
    return data.contents;
  }
};

export const getPostById = async (id: string): Promise<Post> => {
  const data = await fetch(`${baseUrl}/works/${id}`, params('GET'))
    .then((res) => res.json())
    .catch(() => null);

  if (data) {
    return data;
  }
};

export const getPostsByPageNumber = async (
  pageNumber: number,
  limit: number
): Promise<Post[]> => {
  const data = await fetch(
    `${baseUrl}/works?offset=${(pageNumber - 1) * 6}&limit=${limit}`,
    params('GET')
  )
    .then((res) => res.json())
    .catch(() => null);

  if (data.contents) {
    return data.contents;
  }
};

export const getLatestPosts = async (limit: number): Promise<Post[]> => {
  const data = await fetch(`${baseUrl}/works?limit=${limit}`, params('GET'))
    .then((res) => res.json())
    .catch(() => null);

  if (data.contents) {
    return data.contents;
  }
};
