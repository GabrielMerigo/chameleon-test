/* eslint-disable react/prop-types */

/**
 * Dropdown Component
 *
 * @component
 *
 * @param {boolean} isOpen - Determines whether the dropdown menu is currently open.
 * @param {function} onToggle - Callback function to toggle the dropdown's open/close state.
 * @param {string} label - The label or text displayed on the dropdown button.
 * @param {Array} dropdownSections - An array of objects representing different sections within the dropdown.
 *   Each section object should have the following properties:
 *   - dropdownSectionHeader {string} (optional) - The heading for the section.
 *   - dropdownSectionItems {Array} - An array of objects representing items within the section.
 *     Each item object should have the following properties:
 *     - children {ReactNode} - The content to display for the item.
 *   - dropdownSectionProps {Object} (optional) - Additional props to spread onto the section's <ul> element.
 * @param {Object} rest - Additional props to spread onto the main button element.
 *
 * @returns {JSX.Element} The rendered Dropdown component.
 */
export const Dropdown = ({
  isOpen,
  onToggle,
  label,
  dropdownSections,
  ...rest
}) => (
  <div className="dropdown">
    <button
      type="button"
      className="dropdown-button"
      id="dropdownButton"
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={onToggle}
      {...rest}
    >
      {label}
    </button>

    {isOpen &&
      dropdownSections?.map(
        (
          { dropdownSectionHeader, dropdownSectionItems, dropdownSectionProps },
          sectionIndex
        ) => (
          <ul
            key={sectionIndex}
            className="dropdown-menu dropdown-section"
            {...dropdownSectionProps}
          >
            {dropdownSectionHeader && <h3>{dropdownSectionHeader}</h3>}
            {dropdownSectionItems &&
              dropdownSectionItems.map(({ children }, dropdownIndex) => (
                <DropdownItem key={dropdownIndex}>{children}</DropdownItem>
              ))}
          </ul>
        )
      )}
  </div>
);

const DropdownItem = ({ children, ...props }) => <li {...props}>{children}</li>;
