import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { nftDatabase } from '../../database/nftDatabase';

// function PositiveCartNumbers(event, numberOfItems, setNumberOfItems) {
//   if (numberOfItems >= 0) {
//     return setNumberOfItems(event.currentTarget.value);
//   } else {
//     setNumberOfItems(0);
//     console.log('hello');
//   }
// }

// function HandleChange(event, numberOfItems, setNumberOfItems) {
//   if (numberOfItems >= 0) {
//     return (
//       <input
//         value={numberOfItems}
//         onChange={(event) => setNumberOfItems(event.currentTarget.value)}
//       />
//     );
//   } else {
//     return (
//       <input value={numberOfItems} onChange={(event) => setNumberOfItems(0)} />
//     );
//   }
// }

export default function ShowSingleProduct(props) {
  const [numberOfItems, setNumberOfItems] = useState(1);

  return (
    <div>
      <Image src={`/${props.nft.id}.jpg`} width="720" height="480" />
      <div>
        <div>Name: {props.nft.name}</div>
        <div>Type: {props.nft.type}</div>
        <div>Price: {props.nft.price}</div>
      </div>
      <div>
        <label>
          Add quantity
          <br />
          <input
            value={numberOfItems}
            onChange={(event) => {
              // PositiveCartNumbers(event, numberOfItems, setNumberOfItems);
              event.currentTarget.value >= 0
                ? setNumberOfItems(event.currentTarget.value)
                : setNumberOfItems(0);
            }}
          />
        </label>

        <a href="/cart">
          <button data-test-id="product-add-to-cart">Add to cart</button>
        </a>
      </div>
      {console.log('numberOfItems', numberOfItems)}
      {/* {PositiveCartNumber(numberOfItems, setNumberOfItems)}

      <button
        onClick={() => {
          setNumberOfItems(numberOfItems - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setNumberOfItems(numberOfItems + 1);
        }}
      >
        +
      </button>
      <a href="/cart" alt="">
        <button>Add to cart </button>
      </a>
    </div> */}{' '}
    </div>
  );
}

export function getServerSideProps(context) {
  // console.log('context', context.query);
  // console.log('nftId', context.query.nftId);
  // console.log('nftDatabase', nftDatabase);
  const nftId = parseInt(context.query.nftId);

  const nftMatch = nftDatabase.find((nft) => {
    return nft.id === nftId;
  });
  console.log('nftMatch', nftMatch);
  return { props: { nft: nftMatch } };
}