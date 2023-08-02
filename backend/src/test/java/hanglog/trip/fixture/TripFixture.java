package hanglog.trip.fixture;

import static hanglog.trip.fixture.DayLogFixture.EXPENSE_JAPAN_DAYLOG;
import static hanglog.trip.fixture.DayLogFixture.EXPENSE_LONDON_DAYLOG;
import static hanglog.trip.fixture.DayLogFixture.LONDON_DAYLOG_1;
import static hanglog.trip.fixture.DayLogFixture.LONDON_DAYLOG_2;
import static hanglog.trip.fixture.DayLogFixture.LONDON_DAYLOG_EXTRA;

import hanglog.trip.domain.Trip;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public final class TripFixture {

    public static final Trip LONDON_TRIP = new Trip(
            1L,
            "런던 여행",
            "default-image.png",
            LocalDate.of(2023, 7, 1),
            LocalDate.of(2023, 7, 2),
            "",
            new ArrayList<>(List.of(LONDON_DAYLOG_1, LONDON_DAYLOG_2, LONDON_DAYLOG_EXTRA))
    );

    public static final Trip LONDON_TO_JAPAN = new Trip(
            1L,
            "런던에서 일본으로",
            "default-image.png",
            LocalDate.of(2023, 7, 1),
            LocalDate.of(2023, 7, 2),
            "",
            List.of(EXPENSE_LONDON_DAYLOG, EXPENSE_JAPAN_DAYLOG)
    );
}
