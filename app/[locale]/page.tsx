import Hello from "@/components/hello";
import {unstable_setRequestLocale} from "next-intl/server";
import {NextIntlClientProvider, useMessages} from "next-intl";
import React from "react";

export default function Page(
    {
        params: {locale}
    } : Readonly<{
        params: { locale: string };
    }>
) {
  unstable_setRequestLocale(locale);

  const messages = useMessages();
  unstable_setRequestLocale(locale);

  return (

      <NextIntlClientProvider locale={locale} messages={messages}>
        <Hello/>
      </NextIntlClientProvider>
  )
}