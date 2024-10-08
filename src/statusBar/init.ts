import { BuildStatusBar } from './bars/buildStatusBar';
import * as vscode from 'vscode';
import statusBarsSettings from './bars/statusBarsSettings';
import './actions/actionsStatusBar';

export default async function activate(context: vscode.ExtensionContext) {
  new BuildStatusBar(context, statusBarsSettings);
}
