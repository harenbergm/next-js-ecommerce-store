/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  background-color: pink;
  margin-top: 20px;
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  text-align: center;

  > div > a {
    margin-left: 40px;
  }

  > div > a {
    text-transform: uppercase;
    :hover {
      color: white;
    }
  }

  > div > Link {
    gap: 20px;
  }
`;

export default function Footer() {
  return (
    <footer>
      <nav css={navStyles}>
        <div>
          <Link href="/">🏠</Link>
        </div>
        <div>
          <Link href="/nfts">NFTs</Link>
          <Link href="/checkout">Product 2</Link>
          <Link href="/thank-you">Product 3</Link>
          <Link href="/thank-you">Product 4</Link>
        </div>
        <div>
          <Link href="/thank-you">🛒 3</Link>
        </div>
      </nav>
    </footer>
  );
}
