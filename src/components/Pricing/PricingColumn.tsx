import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
  tier: IPricing;
  highlight?: boolean;
}

const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features } = tier;

  const renderedPrice =
    typeof price === "number" ? formatBRL(price) : price;

  return (
    <div
      className={clsx(
        "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full",
        { "shadow-lg": highlight }
      )}
    >
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-2xl font-semibold mb-4">{name}</h3>

        <p className="text-3xl md:text-5xl font-bold mb-6">
          <span className={clsx({ "text-green-800": highlight })}>
            {renderedPrice}
          </span>
          {typeof price === "number" && (
            <span className="text-lg font-normal text-gray-600">/mês</span>
          )}
        </p>

        <button
          className={clsx(
            "w-full py-3 px-4 rounded-full transition-colors",
            {
              "bg-green-600 hover:bg-green-700 text-white": highlight,
              "bg-hero-background hover:bg-gray-200": !highlight,
            }
          )}
          aria-label={`Assinar plano ${name}`}
        >
          Começar agora
        </button>
      </div>

      <div className="p-6 mt-1">
        <p className="font-bold mb-0">RECURSOS</p>
        <p className="text-foreground-accent mb-5">
          Tudo do anterior, e mais:
        </p>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <BsFillCheckCircleFill className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-foreground-accent">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingColumn;
