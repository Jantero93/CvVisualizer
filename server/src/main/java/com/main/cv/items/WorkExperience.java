package com.main.cv.items;

import javax.persistence.Entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class WorkExperience extends AbstractPersistable<Long> {

    private String beginTime;
    private String description;
    private String endTime;
    private String title;
    private Long workplaceRed;

}
