import Link from "next/link";
import breadCrumbStyles from "@/styles/components/BreadCrumb.module.scss";

type Props = {
  lists: {
    path?: string;
    name: string;
  }[];
};

export default function BreadCrumb({ lists }: Props) {
  return (
    <ul className={`${breadCrumbStyles.breadCrumb}`}>
      {lists.map((item) => (
        <Link href={item.path} key={item.name}>
          <a className={`${breadCrumbStyles.breadCrumb__link}`}>
            {item.name}
          </a>
        </Link>
      ))}
    </ul>
  );
};