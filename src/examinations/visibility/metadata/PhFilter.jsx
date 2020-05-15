import React from "react";
import Slider from "@material-ui/core/Slider";
import { useTranslation } from "react-i18next";
import { LabelSwitch } from "../+components/LabelSwitch";

const MIN_PH = 0;
const MAX_PH = 14;

const PhSlider = ({ ph, onPhChanged }) => {
  return (
    <Slider
      min={MIN_PH}
      max={MAX_PH}
      step={0.1}
      value={[ph.min, ph.max]}
      onChange={(event, newValue) =>
        onPhChanged({ min: newValue[0], max: newValue[1] })
      }
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
};

const PhFilterComponent = ({ visibility, filter, onVisibility, onFilter }) => {
  const { t } = useTranslation("n3_metadata");

  return (
    <>
      <LabelSwitch
        key="ph"
        label={t("ph")}
        handleChange={onVisibility}
        name={"ph"}
        isVisible={visibility}
      />
      <PhSlider ph={filter} onPhChanged={onFilter} />
    </>
  );
};

export const PhFilter = React.memo(PhFilterComponent, areEqual);

function areEqual(prevProps, nextProps) {
  const hasVisibilityNotChanged = prevProps.visibility === nextProps.visibility;
  const hasFiltersNotChanged =
    prevProps.filter.min === nextProps.filter.min &&
    prevProps.filter.max === nextProps.filter.max;
  return hasVisibilityNotChanged && hasFiltersNotChanged;
}
