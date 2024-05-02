import { getSession } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";

const UserInfo = ({ user }: { user?: any }) => {
  if (user) {
    return (
      <div>
        <div>
          {user.name}({user.email})
        </div>
        <form
          action={async () => {
            "use server";

            const session = await getSession();
            session.destroy();

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
