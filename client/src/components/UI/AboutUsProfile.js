import { socialIcons } from "./SVG";

export const AboutUsProfile = ({
  name,
  image,
  description,
  linkedInLink,
  gitHubLink,
}) => {
  return (
    <div className="mt-12">
      <img src={`${image}`} width="200" className="rounded-full" />
      <h1 className="mt-8 text-2xl font-bold text-center">{name}</h1>
      <p className="mt-2 text-center">{description}</p>
      <div className="flex justify-center gap-4 mt-5 scale-[1.75]">
        <a
          className={`${linkedInLink ? `text-blue-600` : `text-gray-300`}`}
          href={linkedInLink ? linkedInLink : null}
          target="_blank"
        >
          {socialIcons.linkedIn}
        </a>
        <a href={gitHubLink} target="_blank">
          {socialIcons.gitHub}
        </a>
      </div>
    </div>
  );
};
