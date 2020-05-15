import React from "react";
import { LabelSwitch } from "../+components/LabelSwitch";
import { NamedCheckbox } from "./+components/NamedCheckbox";
import FormGroup from "@material-ui/core/FormGroup";

const ConsistencyFilterComponent = ({
  isVisible,
  onVisibilityChange,
  filter,
  onFilter,
  objectKey,
  t,
}) => {
  const handleSwitchChange = (event) =>
    onVisibilityChange(event.target.name, event.target.checked);

  const handleCheckboxChange = (name, isChecked) =>
    onFilter(objectKey, { ...filter, [name]: isChecked });

  return (
    <>
      <LabelSwitch
        key={objectKey}
        label={t(objectKey)}
        handleChange={handleSwitchChange}
        name={objectKey}
        isVisible={isVisible}
      />

      <FormGroup>
        {Object.keys(filter).map((objectKey) => (
          <NamedCheckbox
            key={objectKey}
            t={t}
            objectKey={objectKey}
            isChecked={filter[objectKey]}
            onChange={handleCheckboxChange}
            isDisabled={!isVisible}
          />
        ))}
      </FormGroup>
    </>
  );
};

export const ConsistencyFilter = React.memo(
  ConsistencyFilterComponent,
  areEqual
);

function areEqual(prevProps, nextProps) {
  const hasVisibilityNotChanged = prevProps.isVisible === nextProps.isVisible;
  const hasFiltersNotChanged =
    prevProps.filter.LIQUID === nextProps.filter.LIQUID &&
    prevProps.filter.HALF_LIQUID === nextProps.filter.HALF_LIQUID &&
    prevProps.filter.RIGID === nextProps.filter.RIGID;

  return hasVisibilityNotChanged && hasFiltersNotChanged;
}
