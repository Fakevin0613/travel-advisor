import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'
const PlaceDetails = ({ place, selected, refProp }) => {
    const classes = useStyles();

    if(selected) {
        refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start"})
    }

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://api.vip.foodnetwork.ca/wp-content/uploads/2022/07/masala-toast-feat.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>

                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly></Rating>
                    <Typography variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking:</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>

                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}

                {place?.address && (
                    <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.copy}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}

                {place?.phone && (
                    <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.copy}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}

                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.tag} />
                ))} 

                <CardActions>
                    <Button size="small" color = "primary" onClick={() => window.open(place.web_url, '_blank')} >
                        TripAdvisor
                    </Button>
                    <Button size="small" color = "primary" onClick={() => window.open(place.website, '_blank')} >
                        Website
                    </Button>
                </CardActions>


            </CardContent>
        </Card>
    );
}

export default PlaceDetails;