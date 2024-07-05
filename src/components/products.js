import React from "react"; //shortcode for importing react is rfc

export default function Product({product, index, increamentquant, decreamentQuantity, }) {
  return (
    <div className="row">
      <div className="col-md-4">
        <p>
          {product.name}{" "}
          <sup>
            {" "}
            <span class="badge text-bg-primary">{product.price}$</span>
          </sup>
        </p>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={() => {decreamentQuantity(index)}}>
            -
          </button>
          <button type="button" class="btn btn-warning">
            {product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              increamentquant(index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        <p>{product.quantity * product.price}</p>
      </div>
    </div>
  );
}
