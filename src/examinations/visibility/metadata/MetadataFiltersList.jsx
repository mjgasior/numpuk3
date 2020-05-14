import React, { useState } from "react";
import { PhSlider } from "./PhFilter";
import { LabelSwitch } from "../+components/LabelSwitch";
import { useTranslation } from "react-i18next";
import { Block } from "../+components/Block";

export const MetadataFiltersList = ({ visibility, setVisibility }) => {
  const { t } = useTranslation("n3_metadata");

  const [] = useState({});

  const handleChange = (event) => {
    setVisibility({
      ...visibility,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Block>
      {Object.keys(visibility).map((objectKey) => (
        <>
          <LabelSwitch
            key={objectKey}
            label={t(objectKey)}
            handleChange={handleChange}
            name={objectKey}
            isVisible={visibility[objectKey]}
          />
          {objectKey === "ph" && <PhSlider />}
        </>
      ))}
    </Block>
  );
};
