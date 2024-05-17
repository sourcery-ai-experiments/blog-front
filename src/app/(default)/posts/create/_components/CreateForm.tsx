import Button from "@/components/Button";
import Input from "@/components/Input";
import MarkdownEditor from "@/components/posts/MarkdownEditor";

export default function CreateForm({
  action,
}: {
  action: string | ((formData: FormData) => void) | undefined;
}) {
  return (
    <form data-color-mode="light" action={action}>
      <Input className="mb-6" type="text" name="title" placeholder="Title" />
      <MarkdownEditor name="content" />
      <Button className="mt-6" type="submit">
        등록
      </Button>
    </form>
  );
}
