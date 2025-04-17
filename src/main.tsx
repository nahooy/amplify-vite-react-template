import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { I18n } from "aws-amplify/utils";

// 認証画面の日本語翻訳辞書
const authDict = {
  ja: {
    'Sign In': 'サインイン',
    'Sign in': 'Sign in',
    Email: 'メールアドレス',
    Password: 'パスワード',
  }
}
// 翻訳を設定
I18n.putVocabularies(authDict);
I18n.setLanguage('ja');

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator hideSignUp>
      <App />
    </Authenticator>
  </React.StrictMode>
);
