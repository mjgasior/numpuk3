import React from "react";
import { RangeSlider } from "./+components/RangeSlider";
import { LabelSwitch } from "../+components/LabelSwitch";

const SliderFilterComponent = ({
  isVisible,
  onVisibilityChange,
  filter,
  onFilter,
  min,
  max,
  objectKey,
  t,
}) => {
  const handleSwitchChange = (event) =>
    onVisibilityChange(event.target.name, event.target.checked);

  const handleChange = (newValue) => onFilter(objectKey, newValue);

  return (
    <>
      <LabelSwitch
        key={objectKey}
        label={t(objectKey)}
        handleChange={handleSwitchChange}
        name={objectKey}
        isVisible={isVisible}
      />
      <RangeSlider
        value={filter}
        onChange={handleChange}
        min={min}
        max={max}
        isDisabled={!isVisible}
      />
    </>
  );
};

export const SliderFilter = React.memo(SliderFilterComponent, areEqual);

function areEqual(prevProps, nextProps) {
  const hasVisibilityNotChanged = prevProps.isVisible === nextProps.isVisible;
  const hasFiltersNotChanged =
    prevProps.filter.min === nextProps.filter.min &&
    prevProps.filter.max === nextProps.filter.max;
  return hasVisibilityNotChanged && hasFiltersNotChanged;
}
