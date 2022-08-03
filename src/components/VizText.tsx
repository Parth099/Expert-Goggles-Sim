import React from "react";

interface VizTextProps {
    displayText: { type: string; text: string }[];
    setDisplayText: (s: string) => void;
    acceptLimit: boolean;
    updateLimit: () => void;
}

const charLimit = 200;

export default function VizText(props: VizTextProps) {
    let length = 0;

    return (
        <div className="my-5 readable-font">
            {props.displayText.map((val) => {
                const type = val.type;
                const text = val.text;

                //do not render text if over limit
                if (length > charLimit && props.acceptLimit) return;

                if (type === "p") {
                    length += text.length;
                    return <p className="inline pr-2">{text}</p>;
                }

                if (type === "li") {
                    length += text.length;
                    return <li>{text}</li>;
                }
            })}
            <button
                className="block mt-3 text-lg text-blue-600 hover:text-blue-900 font-bold underline"
                type="button"
                onClick={() => {
                    props.updateLimit();
                }}
            >
                See {props.acceptLimit ? "More" : "Less"}
            </button>
        </div>
    );
}
