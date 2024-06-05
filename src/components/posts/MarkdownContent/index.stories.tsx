import type { Meta, StoryObj } from "@storybook/react";
import MarkdownContent from "./index";
import MaxWidthDecorator from "@/components/decorator/MaxWidthDecorator";

const postContent = `![](https://velog.velcdn.com/images/freejak5520/post/e132366f-b95b-49ad-91bf-4641631cc8b3/image.gif)\n\nmacOS 사용 중 일반적인 텍스트 에디터에서 option + 방향키로 단어별 이동을 익숙하게 사용하게 됩니다.\n하지만 Zsh에서는 기본적으로 Option + 방향키를 사용하여 단어 단위의 이동을 할 수 없으며, 에디터 처럼 사용하기 위해 간단한 설정이 필요합니다.\n\n## 설정방법\n터미널을 열고, \`~/.zshrc\` 파일을 편집기로 엽니다.\n\`\`\`bash\nopen ~/.zshrc\n\`\`\`\n(선택)macOS의 텍스트 에디터가 아닌 Vim이나 Nano 같은 터미널 기반 편집기를 사용할 수도 있습니다.\n\`\`\`bash\nvim ~/.zshrc\n또는\nnano ~/.zshrc\n\`\`\`\n파일의 마지막에 다음 내용을 추가합니다.\n\`\`\`bash\nbindkey -e\nbindkey '\e\e[C' forward-word\nbindkey '\e\e[D' backward-word\n\`\`\`\n여기서 \`bindkey -e\`는 Emacs 키 바인딩을 활성화합니다.\n이후의 두 줄은 각각 Option + 오른쪽 방향키, Option + 왼쪽 방향키에 대한 단어 단위의 커서 이동을 설정합니다.\n\`\`\`bash\nsource ~/.zshrc\n\`\`\`\n이제 Zsh 쉘에서 Option + 방향키를 사용하여 단어 단위로 커서를 이동할 수 있습니다.`;

const meta = {
  title: "Components/Posts/Markdown Content",
  component: MarkdownContent,
  decorators: [(story) => <MaxWidthDecorator>{story()}</MaxWidthDecorator>],
} satisfies Meta<typeof MarkdownContent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: { content: postContent },
} satisfies Story;
