package hanglog.trip.presentation.dto.request;

import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PlaceRequest {

    private String apiId;
    private String name;
    private String address;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private Long categoryId;
}
