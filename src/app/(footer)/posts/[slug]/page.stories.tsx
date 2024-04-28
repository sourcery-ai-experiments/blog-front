import type { Meta, StoryObj } from "@storybook/react";
import PostDetail from "./page";

global.fetch = async () =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          id: 1,
          slug: "zsh-option-arrow",
          title: "Zsh에서 Option + Arrow 키로 단어 단위 이동하기",
          content: `![](https://velog.velcdn.com/images/freejak5520/post/e132366f-b95b-49ad-91bf-4641631cc8b3/image.gif)

macOS 사용 중 일반적인 텍스트 에디터에서 option + 방향키로 단어별 이동을 익숙하게 사용하게 됩니다.
하지만 Zsh에서는 기본적으로 Option + 방향키를 사용하여 단어 단위의 이동을 할 수 없으며, 에디터 처럼 사용하기 위해 간단한 설정이 필요합니다.

## 설정방법
터미널을 열고, \`~/.zshrc\` 파일을 편집기로 엽니다.
\`\`\`bash
open ~/.zshrc
\`\`\`
(선택)macOS의 텍스트 에디터가 아닌 Vim이나 Nano 같은 터미널 기반 편집기를 사용할 수도 있습니다.
\`\`\`bash
vim ~/.zshrc
또는
nano ~/.zshrc
\`\`\`
파일의 마지막에 다음 내용을 추가합니다.
\`\`\`bash
bindkey -e
bindkey '\e\e[C' forward-word
bindkey '\e\e[D' backward-word
\`\`\`
여기서 \`bindkey -e\`는 Emacs 키 바인딩을 활성화합니다.
이후의 두 줄은 각각 Option + 오른쪽 방향키, Option + 왼쪽 방향키에 대한 단어 단위의 커서 이동을 설정합니다.
\`\`\`bash
source ~/.zshrc
\`\`\`
이제 Zsh 쉘에서 Option + 방향키를 사용하여 단어 단위로 커서를 이동할 수 있습니다.`,
          created_at: "2023-01-01T00:00:00Z",
          updated_at: "2023-01-02T00:00:00Z",
        },
      }),
  }) as any;

const meta = {
  title: "Pages/Posts/상세페이지",
  component: PostDetail,
} satisfies Meta<typeof PostDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    params: {
      slug: "zsh-option-arrow",
    },
  },
  loaders: [async () => ({})],
};
