import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "x6ojpky2r8vk",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });

      const projects = response.items.map((item) => {
        const { fields, sys } = item;
        const { title, url } = fields;
        const img = fields.image.fields.file.url;
        const id = sys.id;
        return { title, url, img, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
