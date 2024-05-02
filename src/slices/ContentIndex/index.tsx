import Bounded from "@/Components/Bounded";
import Heading from "@/Components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { MdArrowOutward } from "react-icons/md";

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */

const ContentIndex = ({ slice }: ContentIndexProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          <PrismicRichText field={slice.primary.description}/>
        </div>
      )}
      <ul className="grid border-b border-b-slate-100">
      {slice.items.map((item, index) => (
        <li key={index} className="list-item">
        <PrismicNextLink field={item.view_more_link} className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row">
        <div className="flex flex-col">
        <span className="text-3xl font-bold">{item.title}</span>
        <span className="text-lg text-gray-500">
            <PrismicRichText field={item.description} /></span>
          </div>
          <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
              {item.view_more}<MdArrowOutward />  {/* Read More Text */}
            </span>
        </PrismicNextLink>
        </li>
        ))}
      </ul>
    </Bounded>
  );
};

export default ContentIndex;
