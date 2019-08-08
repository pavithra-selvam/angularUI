import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { makeUrl, pgmendpoints } from "./../../sdk/config/api.config";
import { Program } from "./../../models/program.model";

@Injectable({
  providedIn: "root"
})
export class ProgramsService {
  constructor(private http: HttpClient) {}

  fetchPrograms(searchParams) {
    // ?_page=7&_limit=20
    const url =
      makeUrl(pgmendpoints.programs.fetch) +
      `?_page=${searchParams.pageNumber}&_limit=${
        searchParams.pageSize
      }&_sort=${searchParams.sortField}&_order=${searchParams.sortOrder}&q=${searchParams.searchQuery}`;

    return this.http
      .get(url, { observe: "response" })
      .pipe(catchError((err, caught) => of(err)));
  }

  createProgram(programData: Program) {
    let url = makeUrl(pgmendpoints.programs.fetch);
    return this.http
      .post(url, programData, { observe: "response" })
      .pipe(catchError((err, caught) => of(err)));
  }

  updateProgram(programData: Program) {
    let url = makeUrl(pgmendpoints.programs.fetch) + `/${programData.id}`;
    return this.http.put(url, programData, { observe: "response" }).pipe(
      catchError((err, caught) => {
        return of(err);
      })
    );
  }
  bulkUploadPrograms(programDataArray: Program[]): Observable<any> {
    /**
     * Here you need to have an actual API service
     * that responds to bulk upload requests in the following format.
     */
    const response = {
      body: {
        message: "Some records failed!",
        totalRecords: 0,
        failedRecordIds: ["record_001"],
        skippedRecordIds: ["record_002"],
        addedRecordIds: ["record_003", "record_004", "record_005"],
        failedRecordsDetails: [
          {
            id: null,
            recordSourceId: "record_001",
            status: "FAIL",
            errors: {
              details: [
                {
                  fieldName: "dob",
                  message: "Invalid Date",
                  value: "2018-11-28T01:40:50.424Z"
                }
              ]
            },
            message: null,
            active: true
          }
        ]
      }
    };
      return of(response);
  }
}

export class SearchParams {
  searchQuery: string = "";
  pageNumber: number = 1;
  pageSize: number = 50;
  sortField: string = "id";
  sortOrder: string = "DESC";
  activeStatusFilter: string = "ACTIVE";
  filter: any = null;
  id: number | null = null;
  ownerId: number | null = null;
  dontSendPhoto: boolean = false;
}

export interface fetchResponse {
  totalRecords?: number;
  programs?: Program[];
  ok: boolean;
  message: string;
}

export interface addResponse {
  message: string;
  id?: number;
  code?: number;
  detailedMessage?: string;
}

export interface updateResponse {
  message: string;
  id?: number;
  code?: number;
  detailedMessage?: string;
}
