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
        <div className="grow bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <h1 className="text-xl text-white ">Create New Post</h1>
        </div>
    );
};

export default CreateNewPost;
