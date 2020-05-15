import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Filter } from "../+components/Filter";
import { Block } from "../+components/Block";

export const TestFiltersList = ({
  visibility,
  setVisibility,
  filters,
  setFilters,
}) => {
  const { t } = useTranslation("n3_metadata");

  const handleChange = useCallback(
    (name, value) => {
      setVisibility((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setVisibility]
  );

  const handleFilterChange = useCallback(
    (name, value) => {
      setFilters((prevState) => {
        if (value === undefined) {
          const copy = { ...prevState };
          delete copy[name];
          return copy;
        } else {
          return {
            ...prevState,
            [name]: value,
          };
        }
      });
    },
    [setFilters]
  );

  return (
    <Block>
      {Object.keys(visibility).map((objectKey) => (
        <Filter
          t={t}
          key={objectKey}
          objectKey={objectKey}
          isVisible={visibility[objectKey]}
          onVisibilityChange={handleChange}
          isFiltered={filters[objectKey]}
          onFilterChange={handleFilterChange}
        />
      ))}
    </Block>
  );
};
