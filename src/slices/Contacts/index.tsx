import Bounded from "@/Components/Bounded";
import Heading from "@/Components/Heading";
import ShowContact from "@/Components/ShowContact";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

/**
 * Props for `Contacts`.
 */
export type ContactsProps = SliceComponentProps<Content.ContactsSlice>;

/**
 * Component for "Contacts" Slices.
 */
const Contacts = ({ slice }: ContactsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading>
        {slice.primary.heading}
      </Heading>
      <div className="pt-5">
      <Heading as="h3" size="sm">
      <div className="flex flex-col gap-8">
        {slice.primary.number}
      <ShowContact linkfield={slice.primary.github_link} label={slice.primary.github_label} icon={FaGithub}/>
      <ShowContact linkfield={slice.primary.twitter_link} label={slice.primary.twitter_label} icon={FaTwitter}/>
      <ShowContact linkfield={slice.primary.linkedin_link} label={slice.primary.linkedin_label} icon={FaLinkedin}/>
      </div>
      </Heading>
      </div>
    </Bounded>
  );
};

export default Contacts;
