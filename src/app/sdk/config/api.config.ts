import { HttpHeaders } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
 import { Injectable } from "@angular/core";
 import { Observable } from "rxjs";
 import { Select, Store } from "@ngxs/store";
 import { HttpClient } from "@angular/common/http";

// Default HTTP headerOptions
export const httpOptions = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Application-Id": "5",
  From: "IshaUser"
};

/**
 * Application API's baseUrl
 */
export const baseUrl = environment.apiBaseUrl;

/**
 * Takes in the apiPath and returns the full URL
 */
export const makeUrl = (path: string) => {
  return `${baseUrl}${path}`;
};

// /**
//  * This is the one place where all endpoints in the application are listed.
//  * Everywhere that these endpoints are needed, they are imported from here.
//  */
export const endpoints = {
  constants: { fetch: "constants" },
  contacts: {
    fetch: "contacts",
  }
};

export const pgmendpoints = {
  constants: { fetch: "constants" },
  programs: {
    fetch: "programs",
  }
};
