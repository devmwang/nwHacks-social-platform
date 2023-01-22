import { api } from "@utils/api";

const CreateNewPost = () => {
    const createPost = api.posts.createPost.useMutation();

    const handlePost = () => {
        createPost.mutate({
            title: "Hello",
            content: "World",
        });
    }
};

export default CreateNewPost;
