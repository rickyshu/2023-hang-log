import { rest } from 'msw';

import type { TripFormData } from '@type/trip';

import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';

import { trip } from '@mocks/data/trip';
import { trips } from '@mocks/data/trips';

export const tripsHandlers = [
  rest.get(`${END_POINTS.TRIPS}`, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(trips));
  }),

  rest.get(`${END_POINTS.TRIPS}/none`, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json([]));
  }),

  rest.post(`${END_POINTS.TRIPS}`, (_, res, ctx) => {
    return res(ctx.status(HTTP_STATUS_CODE.CREATED), ctx.set('Location', '/trips/1'));
  }),

  rest.get(`${END_POINTS.TRIPS}/:tripId`, (_, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(trip));
  }),

  rest.put(`${END_POINTS.TRIPS}/:tripId`, async (req, res, ctx) => {
    const response = await req.json<TripFormData>();

    trip.title = response.title;
    trip.startDate = response.startDate;
    trip.endDate = response.endDate;
    trip.description = response.description;
    trip.imageUrl = response.imageUrl;

    return res(ctx.status(HTTP_STATUS_CODE.NO_CONTENT));
  }),

  rest.delete(`${END_POINTS.TRIPS}/:tripId`, (req, res, ctx) => {
    trips.splice(0, 1);

    return res(ctx.status(HTTP_STATUS_CODE.NO_CONTENT));
  }),

  rest.patch(`${END_POINTS.TRIPS}/:tripId/share`, async (req, res, ctx) => {
    const { sharedStatus } = await req.json();
    const sharedCode = sharedStatus ? '789456123' : null;

    return res(ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json({ sharedCode }));
  }),

  rest.get(`${END_POINTS.SHARED_PAGE(':code')}`, async (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(HTTP_STATUS_CODE.SUCCESS), ctx.json(trip));
  }),
];