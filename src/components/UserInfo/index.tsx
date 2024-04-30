import { deleteToken } from "@/lib/token";
import Link from "next/link";
import { redirect } from "next/navigation";

const UserInfo = ({ user }: { user?: User }) => {
  if (user) {
    return (
      <div>
        <div>
          {user.name}({user.email})
        </div>
        <form
          action={async () => {
            "use server";
            deleteToken();
            redirect("/login");
          }}
        >
          <button>로그아웃</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/login">로그인</Link>
      </div>
    );
  }
};

export default UserInfo;