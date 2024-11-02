import { Label } from "@radix-ui/react-label";

function CommonForm({ formControls }) {
  function rendorInputsByComponentType(formControls) {
    let element = null;
    switch (formControls.componentType) {
      case "input":
        element = (
          <input
            name={formControls.name}
            placeholder={formControls.placeholder}
            id={formControls.name}
            type={formControls.type}
          />
        );
        break;

      default:
        element = (
          <input
            name={formControls.name}
            placeholder={formControls.placeholder}
            id={formControls.name}
            type={formControls.type}
          />
        );
        break;
    }
    return element;
  }
  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItems) => (
          <div className="gird w-full gap-1.5" key={controlItems.name}>
            <Label className="mb-1">{controlItems.label}</Label>
            {rendorInputsByComponentType(controlItems)}
          </div>
        ))}
      </div>
    </form>
  );
}
export default CommonForm;
