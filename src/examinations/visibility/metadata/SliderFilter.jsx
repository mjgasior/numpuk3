import React from "react";
import { RangeSlider } from "./+components/RangeSlider";
import { LabelSwitch } from "../+components/LabelSwitch";

const SliderFilterComponent = ({
  visibility,
  filter,
  onVisibility,
  onFilter,
  min,
  max,
  objectKey,
  t,
}) => {
  const handleChange = (newValue) => onFilter(objectKey, newValue);

  return (
    <>
      <LabelSwitch
        key={objectKey}
        label={t(objectKey)}
        handleChange={onVisibility}
        name={objectKey}
        isVisible={visibility}
      />
      <RangeSlider value={filter} onChange={handleChange} min={min} max={max} />
    </>
  );
};

export const SliderFilter = React.memo(SliderFilterComponent, areEqual);

function areEqual(prevProps, nextProps) {
  const hasVisibilityNotChanged = prevProps.visibility === nextProps.visibility;
  const hasFiltersNotChanged =
    prevProps.filter.min === nextProps.filter.min &&
    prevProps.filter.max === nextProps.filter.max;
  return hasVisibilityNotChanged && hasFiltersNotChanged;
}
