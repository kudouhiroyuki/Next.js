import Link from "next/link";

type Props = {
  lists: {
    path?: string;
    name: string;
  }[];
};

export default function BreadCrumb({ lists }: Props) {
  return (
    <ul>
      {lists.map((item) => (
        <Link href={item.path}>
          <a>{item.name}</a>
        </Link>
      ))}
    </ul>
  );
};