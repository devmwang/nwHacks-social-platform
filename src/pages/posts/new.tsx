import { api } from "@utils/api";
import { ImageList } from "aws-sdk/clients/appstream";

const CreateNewPost = () => {
    const createPost = api.posts.createPost.useMutation();

    const handlePost = (image: FileList, caption: string) => {
        createPost.mutate({
            image,
            caption,
        });
    };

    return (
        <>
            <h1 className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-lg h-full">Create New Post</h1>
        </>
    );
};

export default CreateNewPost;
