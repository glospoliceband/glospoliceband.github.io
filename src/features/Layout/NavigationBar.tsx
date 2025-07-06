import { NavigationInfo } from "./NavigationInfo";
import Link from "next/link";
import { classNames } from "./utils";

export const NavigationBar = ({
  currentPathname,
  navigation,
}: {
  currentPathname: string;
  navigation: NavigationInfo[];
}) => (
  <ul className="w-auto font-medium flex p-4 p-0 mt-4 border border-gray-100 rounded-lg flex-row space-x-8 mt-0 border-0">
    {navigation.map((item) => (
      <li key={item.key}>
        <Link
          href={item.href}
          className={classNames(
            currentPathname === item.href
              ? "border-2"
              : "hover:border-2 hover:border-dashed",
            "px-3 py-2 rounded-md text-sm text-gray-100",
          )}
          aria-current={currentPathname === item.href ? "page" : undefined}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);
