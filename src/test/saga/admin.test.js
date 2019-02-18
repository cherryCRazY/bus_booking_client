import { deleteRoute, adminLogin } from "../../store/sagas/workers/admin";
import { put, call, all, apply } from "redux-saga/effects";
import adminAction from "../../store/actions/adminAction";
import { cloneableGenerator } from "@redux-saga/testing-utils";
import uiAction from "../../store/actions/uiAction";
import axios from "axios";

describe("Testing workers of admin", () => {
    it("should return ", () => {
        const gen = cloneableGenerator(adminLogin)();

        expect(gen.next().value).toEqual(put(uiAction.startFetching()));
        expect(gen.next().value).toEqual(
            all([
                apply(axios, axios.get, ["/admin/users"]),
                apply(axios, axios.get, ["/admin/routes"]),
                apply(axios, axios.get, ["/admin/buses"])
            ])
        );

        expect(gen.next().value).toEqual(
            all([
                put(adminAction.adminGetAllUser(usersData)),
                put(adminAction.getAllRoutes(routes)),
                put(adminAction.getAllTransport(transport))
            ])
        );
    });
});
