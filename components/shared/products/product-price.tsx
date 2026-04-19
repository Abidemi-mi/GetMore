import { cn } from "@/lib/utils";

const ProductPrice = ({value, className}: {value: number; className?: string;}) => {
  //To add decimal places
  const toDecimal = value.toFixed(2);

   // Get Interger & Floating
   const [intvalue, floatvalue] = toDecimal.split('.');


  return (
    <p className={ cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intvalue}
      <span className="text-xs align-super">.{floatvalue}</span>
    </p>
  )
}

export default ProductPrice;