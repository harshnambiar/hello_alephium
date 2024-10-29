/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { getContractByCodeHash } from "./contracts";
import { default as IncrementCounterScriptJson } from "../IncrementCounter.ral.json";
import { default as ResetCounterScriptJson } from "../ResetCounter.ral.json";
import { Entries, AllStructs } from "./types";

export const IncrementCounter = new ExecutableScript<{ ctr: HexString }>(
  Script.fromJson(IncrementCounterScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const ResetCounter = new ExecutableScript<{ ctr: HexString }>(
  Script.fromJson(ResetCounterScriptJson, "", AllStructs),
  getContractByCodeHash
);
