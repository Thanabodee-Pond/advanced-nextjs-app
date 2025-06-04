"use client"

import { generate } from 'promptparse';
import { QRCodeCanvas } from 'qrcode.react';

type AppPromptPayQRCodeProps = {
    mobileNo: string;
    amount: number;
    message: string;
}

const AppPromptPayQRCode = ({mobileNo, amount, message}: AppPromptPayQRCodeProps) => {
  const payload = generate.trueMoney({
    mobileNo: mobileNo,
    amount: amount,
    message: message
  });

  return (
    <>
        { payload && <QRCodeCanvas value={payload} size={300} /> }
    </>
  )
}

export default AppPromptPayQRCode